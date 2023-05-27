import React from "react";
import "./loading_style.css";

export default function Loading() {
  return (
    <div className="spinner-container" style={{ textAlign: "-webkit-center" }}>
      <div className="loading-spinner"></div>
    </div>
  );
}

// export function BackdropLoading() {
//   return (
//     <div>
//       <Backdrop
//         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={true}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </div>
//   );
// }
