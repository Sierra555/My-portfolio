import React, { useEffect, useRef } from "react";
import {
	OrbitControls,
	Preload,
	useGLTF,
	useAnimations,
	useFBX,
} from "@react-three/drei";
import { Canvas, useGraph } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
import { SkeletonUtils } from "three-stdlib";

const AvatarCanvas = ({ animationName }) => {
	return (
		<Canvas>
			<ambientLight intensity={5} />
			<hemisphereLight intensity={1} />
			<directionalLight
				position={[10, 10, 10]}
				intensity={1}
			/>
			<OrbitControls
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
			/>

			<Suspense fallback={<CanvasLoader />}>
				<Developer
					animationName={animationName}
					scale={3}
					position={[0, -2.5, -3]}
				/>
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default AvatarCanvas;

const Developer = ({ animationName, ...props }) => {
	const group = useRef();

	const { scene } = useGLTF("./developer/devAvatar.glb");
	const clone = React.useMemo(
		() => SkeletonUtils.clone(scene),
		[scene]
	);
	const { nodes, materials } = useGraph(clone);

	const { animations: idleAnimation } = useFBX(
		"./developer/idle.fbx"
	);
	const { animations: saluteAnimation } = useFBX(
		"./developer/salute.fbx"
	);

	idleAnimation[0].name = "idle";
	saluteAnimation[0].name = "salute";

	const { actions } = useAnimations(
		[idleAnimation[0], saluteAnimation[0]],
		group
	);

	useEffect(() => {
		actions[animationName].reset().fadeIn(0.5).play();

		return () => actions[animationName].fadeOut(0.5);
	}, [animationName, actions]);

	return (
		<group
			ref={group}
			{...props}
			dispose={null}
		>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				name="EyeLeft"
				geometry={nodes.EyeLeft.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeLeft.skeleton}
				morphTargetDictionary={
					nodes.EyeLeft.morphTargetDictionary
				}
				morphTargetInfluences={
					nodes.EyeLeft.morphTargetInfluences
				}
			/>
			<skinnedMesh
				name="EyeRight"
				geometry={nodes.EyeRight.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeRight.skeleton}
				morphTargetDictionary={
					nodes.EyeRight.morphTargetDictionary
				}
				morphTargetInfluences={
					nodes.EyeRight.morphTargetInfluences
				}
			/>
			<skinnedMesh
				name="Wolf3D_Head"
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Wolf3D_Head.skeleton}
				morphTargetDictionary={
					nodes.Wolf3D_Head.morphTargetDictionary
				}
				morphTargetInfluences={
					nodes.Wolf3D_Head.morphTargetInfluences
				}
			/>
			<skinnedMesh
				name="Wolf3D_Teeth"
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
				morphTargetDictionary={
					nodes.Wolf3D_Teeth.morphTargetDictionary
				}
				morphTargetInfluences={
					nodes.Wolf3D_Teeth.morphTargetInfluences
				}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials.Wolf3D_Body}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
		</group>
	);
};

useGLTF.preload("./developer/devAvatar.glb");
