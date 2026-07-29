import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import cvPdf from "/public/pdf/CV_RaihanAlvianNuryansyah.pdf";
import cardFrontImg from "/public/card-front.png";
import cardBackImg from "/public/card-back.png";
import strapImg from "/public/strap.png";

const CONFIG = {
  segments: 20,
  segmentLength: 0.1,
  gravity: -0.0022,
  damping: 0.982,
  constraintIterations: 24,
  cardWidth: 1.15,
  cardHeight: 1.65,
  cardThickness: 0.07,
  strapWidth: 0.26,
  anchorX: 1.2,
  anchorY: 1.85,
  topAnchorMargin: 0.08,
  dragLerp: 0.55,
  curveSamples: 64,
  containerMaxWidth: 1024,
  strapRepeatY: 6,
  minScale: 0.85,
};

function roundedRectShape(w, h, r) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  shape.moveTo(x, y + r);
  shape.lineTo(x, y + h - r);
  shape.quadraticCurveTo(x, y + h, x + r, y + h);
  shape.lineTo(x + w - r, y + h);
  shape.quadraticCurveTo(x + w, y + h, x + w, y + h - r);
  shape.lineTo(x + w, y + r);
  shape.quadraticCurveTo(x + w, y, x + w - r, y);
  shape.lineTo(x + r, y);
  shape.quadraticCurveTo(x, y, x, y + r);
  return shape;
}

function roundedSlotPath(width, height, cy, r) {
  const path = new THREE.Path();
  const x = -width / 2;
  const y = cy - height / 2;
  path.moveTo(x, y + r);
  path.lineTo(x, y + height - r);
  path.quadraticCurveTo(x, y + height, x + r, y + height);
  path.lineTo(x + width - r, y + height);
  path.quadraticCurveTo(x + width, y + height, x + width, y + height - r);
  path.lineTo(x + width, y + r);
  path.quadraticCurveTo(x + width, y, x + width - r, y);
  path.lineTo(x + r, y);
  path.quadraticCurveTo(x, y, x, y + r);
  return path;
}

function buildClipMesh() {
  const clipGroup = new THREE.Group();

  const fabricLoopMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    roughness: 0.8,
  });
  const metalLightMat = new THREE.MeshStandardMaterial({
    color: 0xdddddd,
    metalness: 0.9,
    roughness: 0.2,
  });
  const metalDarkMat = new THREE.MeshStandardMaterial({
    color: 0x222222,
    metalness: 0.8,
    roughness: 0.3,
  });

  const fabricLoopGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16);
  const fabricLoop = new THREE.Mesh(fabricLoopGeo, fabricLoopMat);
  fabricLoop.rotation.x = Math.PI / 2;
  fabricLoop.position.set(0, 0.08, 0);
  clipGroup.add(fabricLoop);

  const metalBandGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.04, 16);
  const metalBand = new THREE.Mesh(metalBandGeo, metalLightMat);
  metalBand.position.set(0, 0.02, 0);
  clipGroup.add(metalBand);

  const hookShape = new THREE.Shape();
  hookShape.moveTo(-0.012, 0.015);
  hookShape.lineTo(-0.012, -0.065);
  hookShape.absarc(0, -0.065, 0.012, Math.PI, 0, true);
  hookShape.lineTo(0.012, -0.025);

  const hookGeo = new THREE.ExtrudeGeometry(hookShape, {
    depth: 0.015,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.002,
    bevelThickness: 0.002,
  });
  hookGeo.center();

  const hookMesh = new THREE.Mesh(hookGeo, metalDarkMat);
  hookMesh.position.set(0, -0.04, 0);
  clipGroup.add(hookMesh);

  return clipGroup;
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(3, 5, 4);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x88aaff, 0.5);
    rim.position.set(-4, 2, -3);
    scene.add(rim);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    const anchorPos = new THREE.Vector3(CONFIG.anchorX, CONFIG.anchorY, 0);

    const points = [];
    const prevPoints = [];
    for (let i = 0; i < CONFIG.segments; i++) {
      const p = anchorPos.clone();
      p.y -= i * CONFIG.segmentLength;
      points.push(p);
      prevPoints.push(p.clone());
    }

    const strapTexture = new THREE.TextureLoader().load(strapImg, () => {
      renderer.render(scene, camera);
    });
    strapTexture.wrapS = THREE.RepeatWrapping;
    strapTexture.wrapT = THREE.RepeatWrapping;
    strapTexture.repeat.set(1, CONFIG.strapRepeatY);
    strapTexture.colorSpace = THREE.SRGBColorSpace;

    const curve = new THREE.CatmullRomCurve3(
      points.map((p) => p.clone()),
      false,
      "catmullrom",
      0.4
    );

    const ribbonSegs = CONFIG.curveSamples;
    const ribbonVertCount = (ribbonSegs + 1) * 2;
    const ribbonGeo = new THREE.BufferGeometry();
    const ribbonPositions = new Float32Array(ribbonVertCount * 3);
    const ribbonUVs = new Float32Array(ribbonVertCount * 2);
    const ribbonIndices = [];

    for (let i = 0; i < ribbonSegs; i++) {
      const a = i * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;
      ribbonIndices.push(a, b, c, b, d, c);
    }
    for (let i = 0; i <= ribbonSegs; i++) {
      const v = (i / ribbonSegs) * CONFIG.strapRepeatY;
      ribbonUVs[i * 4 + 0] = 0;
      ribbonUVs[i * 4 + 1] = v;
      ribbonUVs[i * 4 + 2] = 1;
      ribbonUVs[i * 4 + 3] = v;
    }
    ribbonGeo.setAttribute("position", new THREE.BufferAttribute(ribbonPositions, 3));
    ribbonGeo.setAttribute("uv", new THREE.BufferAttribute(ribbonUVs, 2));
    ribbonGeo.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(ribbonVertCount * 3), 3));
    ribbonGeo.setIndex(ribbonIndices);

    const ribbonMat = new THREE.MeshStandardMaterial({
      map: strapTexture,
      side: THREE.DoubleSide,
      roughness: 0.55,
      metalness: 0,
    });
    const strapMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    worldGroup.add(strapMesh);

    const ribbonHalfWidth = CONFIG.strapWidth / 2;
    const ribbonTangent = new THREE.Vector3();
    const ribbonViewDir = new THREE.Vector3();
    const ribbonSide = new THREE.Vector3();
    const ribbonLeft = new THREE.Vector3();
    const ribbonRight = new THREE.Vector3();

    function updateRibbon() {
      const sampled = curve.getPoints(ribbonSegs);
      for (let i = 0; i <= ribbonSegs; i++) {
        const t = i / ribbonSegs;
        const p = sampled[i];
        let widthScale = 1;
        if (t > 0.88) {
          widthScale = 1 - ((t - 0.88) / 0.12) * 0.65;
        }
        ribbonTangent.copy(curve.getTangent(t)).normalize();
        ribbonViewDir.copy(camera.position).sub(p).normalize();
        ribbonSide
          .crossVectors(ribbonTangent, ribbonViewDir)
          .normalize()
          .multiplyScalar(ribbonHalfWidth * widthScale);
        ribbonLeft.copy(p).sub(ribbonSide);
        ribbonRight.copy(p).add(ribbonSide);

        const li = i * 2;
        const ri = li + 1;
        ribbonPositions[li * 3 + 0] = ribbonLeft.x;
        ribbonPositions[li * 3 + 1] = ribbonLeft.y;
        ribbonPositions[li * 3 + 2] = ribbonLeft.z;
        ribbonPositions[ri * 3 + 0] = ribbonRight.x;
        ribbonPositions[ri * 3 + 1] = ribbonRight.y;
        ribbonPositions[ri * 3 + 2] = ribbonRight.z;
      }
      ribbonGeo.attributes.position.needsUpdate = true;
      ribbonGeo.computeVertexNormals();
    }

    const holeY = CONFIG.cardHeight / 2 - 0.11;
    const slotWidth = 0.08;
    const slotHeight = 0.035;
    const slotRadius = 0.0175;

    const cardShape = roundedRectShape(CONFIG.cardWidth, CONFIG.cardHeight, 0.06);
    cardShape.holes.push(roundedSlotPath(slotWidth, slotHeight, holeY, slotRadius));

    const cardGeo = new THREE.ExtrudeGeometry(cardShape, {
      depth: CONFIG.cardThickness,
      bevelEnabled: false,
      curveSegments: 32,
    });
    cardGeo.translate(0, 0, -CONFIG.cardThickness / 2);

    const uvAttr = cardGeo.attributes.uv;
    const posAttr = cardGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const u = (x + CONFIG.cardWidth / 2) / CONFIG.cardWidth;
      const v = (y + CONFIG.cardHeight / 2) / CONFIG.cardHeight;
      uvAttr.setXY(i, u, v);
    }
    uvAttr.needsUpdate = true;

    const textureLoader = new THREE.TextureLoader();

    const frontTex = textureLoader.load(cardFrontImg, () => {
      renderer.render(scene, camera);
    });
    frontTex.colorSpace = THREE.SRGBColorSpace;

    const backTex = textureLoader.load(cardBackImg, () => {
      renderer.render(scene, camera);
    });
    backTex.colorSpace = THREE.SRGBColorSpace;

    const faceShapeGeo = new THREE.ShapeGeometry(cardShape, 32);
    const faceUv = faceShapeGeo.attributes.uv;
    const facePos = faceShapeGeo.attributes.position;
    for (let i = 0; i < facePos.count; i++) {
      const x = facePos.getX(i);
      const y = facePos.getY(i);
      const u = (x + CONFIG.cardWidth / 2) / CONFIG.cardWidth;
      const v = (y + CONFIG.cardHeight / 2) / CONFIG.cardHeight;
      faceUv.setXY(i, u, v);
    }
    faceUv.needsUpdate = true;

    const baseMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
    });
    const baseMesh = new THREE.Mesh(cardGeo, baseMat);

    const frontMat = new THREE.MeshBasicMaterial({
      map: frontTex,
      side: THREE.FrontSide,
      transparent: true,
      depthTest: true,
      depthWrite: true,
    });
    const frontMesh = new THREE.Mesh(faceShapeGeo, frontMat);
    frontMesh.position.z = CONFIG.cardThickness / 2 + 0.001;

    const backMat = new THREE.MeshBasicMaterial({
      map: backTex,
      side: THREE.FrontSide,
      transparent: true,
      depthTest: true,
      depthWrite: true,
    });
    const backMesh = new THREE.Mesh(faceShapeGeo, backMat);
    backMesh.rotation.y = Math.PI;
    backMesh.position.z = -(CONFIG.cardThickness / 2 + 0.001);

    const cardMesh = new THREE.Group();
    cardMesh.add(baseMesh);
    cardMesh.add(frontMesh);
    cardMesh.add(backMesh);
    cardMesh.position.y = -holeY;

    const cardGroup = new THREE.Group();
    cardGroup.add(cardMesh);
    worldGroup.add(cardGroup);

    const clipMesh = buildClipMesh();
    clipMesh.position.set(0, 0, 0);
    cardGroup.add(clipMesh);

    let dragging = false;
    let dragTarget = new THREE.Vector3();
    let velocitySample = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2();
    const dragPlane = new THREE.Plane();
    const planeIntersect = new THREE.Vector3();

    function pointerToNDC(e) {
      const rect = canvas.getBoundingClientRect();
      pointerNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function onPointerDown(e) {
      pointerToNDC(e);
      raycaster.setFromCamera(pointerNDC, camera);
      const hit = raycaster.intersectObjects(cardMesh.children, true);
      if (hit.length > 0) {
        dragging = true;
        canvas.classList.add("cursor-grabbing");
        canvas.classList.remove("cursor-grab");
        const camDir = new THREE.Vector3();
        camera.getWorldDirection(camDir);
        dragPlane.setFromNormalAndCoplanarPoint(camDir, cardGroup.position);
        canvas.setPointerCapture(e.pointerId);
      }
    }

    function onPointerMove(e) {
      if (!dragging) return;
      pointerToNDC(e);
      raycaster.setFromCamera(pointerNDC, camera);
      if (raycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
        dragTarget.copy(planeIntersect);
      }
    }

    function onPointerUp() {
      if (!dragging) return;
      dragging = false;
      canvas.classList.remove("cursor-grabbing");
      canvas.classList.add("cursor-grab");
      const last = points[points.length - 1];
      prevPoints[points.length - 1].copy(last).sub(velocitySample);
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    function simulate() {
      const t = performance.now() * 0.001;
      const wind = Math.sin(t * 0.6) * 0.00035 + Math.sin(t * 1.7) * 0.00012;

      for (let i = 1; i < points.length; i++) {
        if (dragging && i >= points.length - 2) continue;
        const p = points[i];
        const prev = prevPoints[i];
        const vx = (p.x - prev.x) * CONFIG.damping;
        const vy = (p.y - prev.y) * CONFIG.damping;
        const vz = (p.z - prev.z) * CONFIG.damping;
        prev.copy(p);
        p.x += vx + wind;
        p.y += vy + CONFIG.gravity;
        p.z += vz;
      }

      if (dragging) {
        const last = points[points.length - 1];
        velocitySample.copy(last);
        last.lerp(dragTarget, CONFIG.dragLerp);
        velocitySample.sub(last).multiplyScalar(-1);
        points[points.length - 2].lerp(dragTarget, CONFIG.dragLerp * 0.5);
      }

      for (let iter = 0; iter < CONFIG.constraintIterations; iter++) {
        points[0].copy(anchorPos);
        for (let i = 0; i < points.length - 1; i++) {
          const a = points[i];
          const b = points[i + 1];
          if (dragging && i + 1 === points.length - 1) continue;
          const delta = new THREE.Vector3().subVectors(b, a);
          const dist = delta.length() || 0.0001;
          const diff = (dist - CONFIG.segmentLength) / dist;
          const offset = delta.multiplyScalar(diff * 0.5);
          if (i > 0) a.add(offset);
          b.sub(offset);
        }
      }
    }

    function updateVisuals() {
      for (let i = 0; i < points.length; i++) {
        curve.points[i].copy(points[i]);
      }
      updateRibbon();

      const last = points[points.length - 1];
      const prevLast = points[points.length - 2];
      const dir = new THREE.Vector3().subVectors(last, prevLast).normalize();

      cardGroup.position.copy(last);

      const swingZ = -dir.x * 0.9;
      const swingX = dir.z * 0.5;
      const swingY = dir.x * 2.5;

      cardGroup.rotation.z += (swingZ - cardGroup.rotation.z) * 0.15;
      cardGroup.rotation.x += (swingX - cardGroup.rotation.x) * 0.15;
      cardGroup.rotation.y += (swingY - cardGroup.rotation.y) * 0.1;

      cardGroup.updateMatrixWorld(true);
    }

    let frameId;
    function animate() {
      simulate();
      updateVisuals();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function resize() {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);

      const scaleFactor = Math.max(
        Math.min(w / CONFIG.containerMaxWidth, 1),
        CONFIG.minScale
      );
      worldGroup.scale.setScalar(scaleFactor);

      const vFov = (camera.fov * Math.PI) / 180;
      const halfHeight = Math.tan(vFov / 2) * camera.position.z;
      const halfWidth = halfHeight * camera.aspect;
      const margin = CONFIG.cardWidth / 2 + 0.25;

      const padding = w < 640 ? 16 : 24;
      const contentWidth = Math.min(w, CONFIG.containerMaxWidth);
      const leftMargin = (w - contentWidth) / 2;
      const rightEdgePx = leftMargin + contentWidth - padding;
      const fraction = (rightEdgePx - w / 2) / (w / 2);
      const targetX = (fraction * halfWidth) / scaleFactor;

      const isMobile = w < 640;
      const defaultAnchorX = isMobile ? 0.6 : Math.max(0.6, Math.min(targetX, halfWidth / scaleFactor - margin)) - 1.3;

      anchorPos.x = defaultAnchorX;
      anchorPos.y = (halfHeight + 0.2) / scaleFactor;
    }

    let resizeFrame = null;
    function scheduleResize() {
      if (resizeFrame !== null) return;
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = null;
        resize();
      });
    }

    const resizeObserver = new ResizeObserver(scheduleResize);
    resizeObserver.observe(container);
    window.addEventListener("resize", scheduleResize);

    let dprQuery = null;
    function onDprChange() {
      scheduleResize();
      watchDevicePixelRatio();
    }
    function watchDevicePixelRatio() {
      if (dprQuery) dprQuery.removeEventListener("change", onDprChange);
      dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      dprQuery.addEventListener("change", onDprChange);
    }
    watchDevicePixelRatio();

    resize();

    return () => {
      cancelAnimationFrame(frameId);
      if (resizeFrame !== null) cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleResize);
      if (dprQuery) dprQuery.removeEventListener("change", onDprChange);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      cardGeo.dispose();
      faceShapeGeo.dispose();
      ribbonGeo.dispose();
      ribbonMat.dispose();
      baseMat.dispose();
      frontMat.dispose();
      backMat.dispose();
      strapTexture.dispose();
      frontTex.dispose();
      backTex.dispose();
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
        id="home"
        ref={containerRef}
        className="relative flex min-h-[100svh] w-full items-center overflow-hidden -mb-10 sm:-mb-16"
        >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="z-10 max-w-3xl pt-36 sm:pt-0">
          <p className="font-[var(--font-mono)] text-xs sm:text-sm text-[var(--color-muted)] mb-4">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-6xl">
            Raihan Alvian <br />
            <span className="text-2xl sm:text-3xl md:text-5xl">Nuryansyah</span>
          </h1>
          <p className="mt-3 text-base text-neutral-600 sm:text-lg md:text-xl">
            Web Developer
          </p>
          <p className="mt-4 max-w-xl text-sm text-neutral-500 sm:text-base">
            Informatics Engineering student building reliable web systems — from designing backend architecture to delivering responsive, user-focused interfaces.
          </p>
          <a
  href={cvPdf}
  download="CV_RaihanAlvianNuryansyah.pdf"
  className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-[var(--color-ink)] pl-5 pr-6 py-2.5 font-[var(--font-mono)] text-xs font-bold uppercase tracking-wide text-[var(--color-ink)] transition-colors duration-300 hover:text-[var(--color-bg)]"
>
  <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--color-ink)] transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10" />
  <span className="relative z-10 flex items-center gap-3">
    <IconDownload />
    Download CV
  </span>
</a>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full touch-none cursor-grab"
      />
    </section>
  );
}