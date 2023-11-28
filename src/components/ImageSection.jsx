
const ImageSection = ({ imageSrc, style, handleDownload, handleResetFilters }) => {
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
         
    <button className="resetBtn button" id="btn" onClick={handleResetFilters}>Reset</button>
    </div>
    </>
  )
}

export default ImageSection
