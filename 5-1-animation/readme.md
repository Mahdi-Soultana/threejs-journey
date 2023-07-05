## basic animations in three js

we will practice and learn about how can we animate a simple cube in threejs

here what i've learned from the lesson today :
1- how to move and mesh with requestAnimationFrame and we can use gsap also to animate the same cube
2- animation could be fast depend to device's frame rate so we do getElapsedTime() from three clock instance and animate depend to this with requestAnimationFrame or use simply gsap
3- lookAt method should be in animation the function that call requestAnimationFrame

mistake i should know : the render should be the last thing to do , example if i setSize after render will not Work

// not work will see nothing in our canvas
renderer.render(scene, camera);
renderer.setSize(size.width, size.height);

// we need to switch the order and make the render the last thing to call 🟩
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

result : https://codesandbox.io/p/sandbox/with-vitejs-2ycp69?file=%2Fsrc%2Fmain.ts%3A1%2C1
