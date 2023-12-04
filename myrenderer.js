window.addEventListener("DOMContentLoaded", init);

function init() {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    const light = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(light);
}

