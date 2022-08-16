import React from "react";
import Video5 from "../videos/videobg1.mp4";
function JoinUs() {
  return (
    <>
      <section>
        <div>
          <video
            autoPlay
            loop
            style={{
              width: "100%",
              position: "absolute",
              height: "auto",
              objectFit: "cover",
              top: "50%",
              zIndex: "-1",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <source src={Video5} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

export default JoinUs;
