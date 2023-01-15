// import React, { useRef, useEffect } from 'react';
// import h337 from 'heatmap.js';
//
// const HeatmapComponent = () => {
//     const heatmapRef = useRef(null);
//
//     useEffect(() => {
//         const heatmap = h337.create({
//             container: heatmapRef.current,
//             // configure heatmap settings here
//         });
//
//         // add data to heatmap
//         heatmap.addData({ x: 50, y: 50, value: 100 });
//
//         return () => {
//             heatmap.destroy();
//         }
//     }, []);
//
//     return <div ref={heatmapRef} />;
// }
//
// export default HeatmapComponent;
