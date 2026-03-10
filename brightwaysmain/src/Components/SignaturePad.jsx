import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function SignaturePad() {

  const sigCanvas = useRef(null);

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    const signature = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    console.log(signature);
  };

  return (
    <div>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 400, height: 200, className: "border" }}
      />

      <button onClick={clear}>Clear</button>
      <button onClick={save}>Save</button>
    </div>
  );
}

export default SignaturePad;