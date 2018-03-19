import THREE from 'three';

const objectWorldPosition = new THREE.Vector3();
const cameraWorldPosition = new THREE.Vector3();
const objectWorldScale = new THREE.Vector3();

export default function(object, renderer, camera) {
	if (renderer.domElement.width && renderer.domElement.height && object.material.map.lines.length) {
		let distance = object.getWorldPosition(objectWorldPosition).distanceTo(camera.getWorldPosition(cameraWorldPosition));
		if (distance) {
			let heightInPixels = object.getWorldScale(objectWorldScale).y * renderer.domElement.height / distance;
			if (heightInPixels) {
				return Math.round(heightInPixels / object.material.map.paddingBoxHeight);
			}
		}
	}
	return 0;
}
