"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Sphere, Program, Mesh } from 'ogl';

interface OrbProps {
  [key: string]: never;
}

const Orb: React.FC<OrbProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new Renderer({ canvas, width: window.innerWidth, height: window.innerHeight });
    const gl = renderer.gl;

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 5);

    const scene = new Transform();

    const geometry = new Sphere(gl, { radius: 1, widthSegments: 64, heightSegments: 64 });

    const vertex = `
      attribute vec3 position;
      attribute vec3 normal;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vNormal = normal;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragment = `
      precision highp float;
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec3 color = vec3(0.5 + 0.5 * sin(uTime + vPosition.x * 10.0), 0.5 + 0.5 * cos(uTime + vPosition.y * 10.0), 0.5 + 0.5 * sin(uTime + vPosition.z * 10.0));
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationId: number;

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);

      program.uniforms.uTime.value = time * 0.001;

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render({ scene, camera });
    };

    animate(0);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default Orb;