
const ImageSection = ({ imageSrc, style, handleDownload }) => {
  return (
    <>
    <section className="imageArea">
{ imageSrc ?
      <img src={imageSrc} alt="Image" className="image" style={style}  />
      : <h2>Add Your Image...</h2>
    } 
    </section>
    <div className="btn">
    <button className="button" onClick={handleDownload}>Download</button>
    </div>
    </>
  )
}

export default ImageSection
