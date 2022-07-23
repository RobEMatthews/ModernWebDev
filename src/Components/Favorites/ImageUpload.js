import React, { useState } from "react";
import Parse from "parse";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileUpload = () => {
  const fileUploadControl = selectedImage;
  
  if (fileUploadControl.size > 0) {
    const file = fileUploadControl;
    const name = "photo";
  
  
    const parseFile = new Parse.File(name, file);

    const Event = Parse.Object.extend("Event");
    const event = new Event();
    event.set("sport", 'bball');
    event.set("level", '1')
    event.set("venue", '1')
    event.set("date", '1')
    event.set("eventImage", parseFile);
    event.save().then(function() {
      // The file has been saved to Parse.
    }, function(error) {
      // The file either could not be read, or could not be saved to Parse.
    });

  }
}

  return (
    <div>
      {/* <h1>Upload and Display Image</h1> */}
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        <button onClick={fileUpload}>Upload</button>
        </div>
      )}
      <br />
      <br /> 
      <input
        type="file"
        id="PhotoFileUpload"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;