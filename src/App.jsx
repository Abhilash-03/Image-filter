import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ImageSection from "./components/ImageSection";

function App() {
  
  const [imageSrc, setImageSrc] = useState(null);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(100);
  const [saturate, setSaturate] = useState(85);
  const [invert, setInvert] = useState(0);
  const [hue, setHue] = useState(20);
  const [grayscale, setGrayscale] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [sepia, setSepia] = useState(0);
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
    }

    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const date = Date.now();
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.filter = myStyle.filter;
      ctx.drawImage(img, 0, 0);
      const link = document.createElement('a');
      link.download = `image-${date}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
    img.src = imageSrc;
  }

  const handleResetFilters = () => {
    setBrightness(1);
    setContrast(100);
    setGrayscale(0);
    setHue(0);
    setInvert(0);
    setOpacity(100);
    setSaturate(100);
    setSepia(0);

  }

  const myStyle = {
    filter: `brightness(${brightness}) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) hue-rotate(${hue}deg) grayscale(${grayscale}%) opacity(${opacity}%) sepia(${sepia}%)`,
  };

  return (
    <>
      <main className="app">
        <h1 className="heading">Image Beautify</h1>
        <InputField
          type="file"
          className="inputfile"
          onChange={handleImageChange}
        />

        <ImageSection imageSrc={imageSrc} style={myStyle} handleDownload={handleDownload} handleResetFilters={handleResetFilters} />

        <section className="filterOptions">
          <InputField
            label="Brightness"
            type="range"
            className="rangeInput"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
            min={1}
            max={100}
          />

          <InputField
            label="Contrast"
            type="range"
            className="rangeInput"
            value={contrast}
            onChange={(e) => setContrast(e.target.value)}
            max={200}
          />

          <InputField
            label="Saturate"
            type="range"
            className="rangeInput"
            value={saturate}
            onChange={(e) => setSaturate(e.target.value)}
            max={100}
          />

          <InputField
            label="Sepia"
            type="range"
            className="rangeInput"
            value={sepia}
            onChange={(e) => setSepia(e.target.value)}
            max={100}
          />

          <InputField
            label="Grayscale"
            type="range"
            className="rangeInput"
            value={grayscale}
            onChange={(e) => setGrayscale(e.target.value)}
            max={100}
          />

          <InputField
            label="Hue"
            type="range"
            className="rangeInput"
            value={hue}
            onChange={(e) => setHue(e.target.value)}
            max={360}
          />

          <InputField
            label="Opacity"
            type="range"
            className="rangeInput"
            value={opacity}
            onChange={(e) => setOpacity(e.target.value)}
            max={100}
          />

          <InputField
            label="Invert"
            type="range"
            className="rangeInput"
            value={invert}
            onChange={(e) => setInvert(e.target.value)}
            max={100}
          />
          
        </section>
      </main>
    </>
  );
}

export default App;
