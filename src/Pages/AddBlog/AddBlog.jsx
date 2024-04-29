import React, { useState, useEffect } from "react";
import dp from "../../assets/Images/Ellipse 26.png";
import AIIMg from "../../assets/Images/Rectangle 200.png";
import BlogPreviewModal from "../../Components/BlogPreviewModal/BlogPreviewModal";
import "./AddBlog.css"
const AddBlog = () => {

  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [dateOfPublish, setDateOfPublish] = useState("");
  const [contentOne, setContentOne] = useState("");
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [image, setImage]=useState(null)
  const [errMessage, setErrMessage]=useState("")
  const [finalImage, setFinalImage]=useState(null)

  const isValidFileUploaded=(file)=>{
    const validExtensions = ['png','jpeg','jpg']
    const fileExtension = file.type.split('/')[1]
    return validExtensions.includes(fileExtension)
  }

const handleImage=(e)=>{
    if(isValidFileUploaded(e.target.files[0])){
        setImage(e.target.files[0])
        ImageTOBase(e.target.files[0])
    }else{
        setErrMessage("Invalid File type")
    }
}

const ImageTOBase=(file)=>{
  const reader= new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend=()=>{
    setFinalImage(reader.result)
  }
}

  const togglePreviewModal = () => {
    setPreviewModalOpen(!previewModalOpen);
  };
  // Function to handle input change and save data to local storage
  const handleInputChange = (event, setterFunction) => {
    const { value } = event.target;
    setterFunction(value);
    // Save data to local storage
    localStorage.setItem(event.target.id, value);
  };

  // Effect to load data from local storage on component mount
  useEffect(() => {
    const storedGenre = localStorage.getItem("genre");
    const storedTitle = localStorage.getItem("title");
    const storedAuthorName = localStorage.getItem("authorName");
    const storedDateOfPublish = localStorage.getItem("dateOfPublish");
    const storedContentOne = localStorage.getItem("contentOne");

    if (storedGenre) setGenre(storedGenre);
    if (storedTitle) setTitle(storedTitle);
    if (storedAuthorName) setAuthorName(storedAuthorName);
    if (storedDateOfPublish) setDateOfPublish(storedDateOfPublish);
    if (storedContentOne) setContentOne(storedContentOne);
  }, []);

  const closeModal = () => {

    localStorage.removeItem("genre");
  localStorage.removeItem("title");
  localStorage.removeItem("authorName");
  localStorage.removeItem("dateOfPublish");
  localStorage.removeItem("contentOne");

    setPreviewModalOpen(false);
  };

  // Event listener for clicking outside the modal
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      // If the click target is the overlay itself, close the modal
      closeModal();
    }
  };
















  return (
    <>
      <div className="min-h-screen bg-white pt-20">
        <div className="min-h-screen lg:mx-40 xl:mx-60 2xl:mx-76    ">
          <div>
            <h1 className="text-7xl font-black mx-2">Add New Blog</h1>
          </div>
          <div className="min-h-screen form mt-4">
            <div className="mt-2 min-h-28  flex flex-col py-4 mx-2">
              <label
                htmlFor="genre"
                className="text-lg   2xl:text-sm font-medium"
              >
                Genre
              </label>
              <input
                id="genre"
                className="px-3 focus:outline-none w-[45%] lg:placeholder:text-lg lg:placeholder:font-normal border border-gray-400 rounded-xl h-16 2xl:h-16"
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => handleInputChange(e, setGenre)}
              />
            </div>

            <div className="mt-2  min-h-28  flex flex-col py-4 mx-2">
              <label
                htmlFor="title"
                className="text-lg   2xl:text-sm font-medium"
              >
                Title
              </label>
              <input
                id="title"
                className="px-3 focus:outline-none w-[45%] lg:placeholder:text-lg text-lg font-normal lg:placeholder:font-normal border border-gray-400 rounded-xl h-16 2xl:h-16"
                type="text"
                placeholder="Please give the Title of your blog"
                value={title}
                onChange={(e) => handleInputChange(e, setTitle)}
              />
            </div>

            <div className="min-h-36 mx-2 mt-2 py-4">
              <div className="min-h-36 ">
                <label
                  htmlFor="Profile Picture"
                  className="text-lg   2xl:text-sm font-medium"
                >
                  Profile Picture
                </label>
                <div className="flex">
                  <div className="flex flex-col mx-4 my-4">
                  <label className="relative w-[220px] h-[58px] bg-krutNeon bg-opacity-50 rounded-full text-xl flex items-center justify-center cursor-pointer">
  <span className="px-8">Choose Image</span>
  <input type="file" className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" onChange={handleImage} />
</label>

                    <button
                      className=" rounded-full px-8 text-xl mt-2 w-[220px] h-[58px]"
                      style={{ backgroundColor: "rgba(239, 0, 0, 0.35)" }}
                    >
                      Delete Image
                    </button>
                  </div>
                  <div className="mx-4 my-4">
                    <img
                      className="rounded-full w-[126px] h-[126px]"
                      src={finalImage ? finalImage : dp}
                      alt=""  
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2  min-h-28  flex flex-col py-4 mx-2">
              <label
                htmlFor="authorName"
                className="text-lg   2xl:text-sm font-medium"
              >
                Name of the Author
              </label>
              <input
                id="authorName"
                className="px-3 focus:outline-none  w-[45%] lg:placeholder:text-lg lg:placeholder:font-normal border border-gray-400 rounded-xl h-16 2xl:h-16"
                type="text"
                placeholder="Please Provide Author Name"
                value={authorName}
                onChange={(e) => handleInputChange(e, setAuthorName)}
              />
            </div>

            <div className="mt-2  min-h-28  flex flex-col py-4 mx-2">
              <label
                htmlFor="dateOfPublish"
                className="text-lg   2xl:text-sm font-medium"
              >
                Date of Publish
              </label>
              <input
                id="dateOfPublish"
                className="focus:outline-none px-4 w-[45%] lg:placeholder:text-lg lg:placeholder:font-normal border  border-gray-400 rounded-xl h-16 2xl:h-16"
                type="date"
                placeholder="Month,Date,Year"
                value={dateOfPublish}
                onChange={(e) => handleInputChange(e, setDateOfPublish)}
              />
            </div>

            <div className="min-h-36 mx-2 mt-2 py-4">
              <div className="min-h-36 ">
                <label
                  htmlFor="Profile Picture"
                  className="text-lg   2xl:text-sm font-medium"
                >
                  Title Picture
                </label>
                <div className="flex">
                  <div className="flex flex-col mx-4 my-4">
                    <button className="bg-krutNeon bg-opacity-50 rounded-full w-[220px] px-8 h-[58px] text-xl ">
                      Choose Image
                    </button>
                    <button
                      className=" rounded-full px-8 text-xl mt-2 w-[220px] h-[58px]"
                      style={{ backgroundColor: "rgba(239, 0, 0, 0.35)" }}
                    >
                      Delete Image
                    </button>
                  </div>
                  <div className="mx-4 my-4">
                    <img className=" w-[308px] h-[128px]" src={AIIMg} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className=" min-h-28">
              <div className="py-4 flex flex-col">
                <label
                  htmlFor="contentOne"
                  className="text-lg   2xl:text-sm font-medium"
                >
                  Content Below Title Img
                </label>
                <textarea
                  id="contentOne"
                  className="focus:outline-none px-4 mt-4 lg:placeholder:text-lg lg:placeholder:font-normal border border-gray-400 rounded-xl h-16 2xl:h-16"
                  placeholder="Please type the content"
                  value={contentOne}
                onChange={(e) => handleInputChange(e, setContentOne)}
                ></textarea>
              </div>
            </div>


            <div className="min-h-36 mx-2 mt-2 py-4">
              <div className="min-h-36 ">
                <label
                  htmlFor="Profile Picture"
                  className="text-lg   2xl:text-sm font-medium"
                >
                 Inside Blog -&gt; Img 1
                </label>
                <div className="flex">
                  <div className="flex flex-col mx-4 my-4">
                    <button className="bg-krutNeon bg-opacity-50 rounded-full w-[220px] px-8 h-[58px] text-xl ">
                      Choose Image
                     
                    </button>
                    <button
                      className=" rounded-full px-8 text-xl mt-2 w-[220px] h-[58px]"
                      style={{ backgroundColor: "rgba(239, 0, 0, 0.35)" }}
                    >
                      Delete Image
                    </button>
                  </div>
                  <div className="mx-4 my-4">
                    <img className=" w-[308px] h-[128px]" src={AIIMg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            

            <div className=" min-h-28">
              <div className="py-4 flex flex-col">
                <label
                  htmlFor="contentone"
                  className="text-lg   2xl:text-sm font-medium"
                >
                  Content Below Img 1
                </label>
                <textarea
                  id="contentone"
                  className="focus:outline-none px-4 mt-4 lg:placeholder:text-lg lg:placeholder:font-normal border border-gray-400 rounded-xl h-16 2xl:h-16"
                  placeholder="Please type the content"
                ></textarea>
              </div>
            </div>

            

            <div className="min-h-36 mx-2 mt-2 py-4">
              <div className="min-h-36 ">
                <label
                  htmlFor="Profile Picture"
                  className="text-lg   2xl:text-sm font-medium"
                >
                 Inside Blog -&gt; Img 2
                </label>
                <div className="flex">
                  <div className="flex flex-col mx-4 my-4">
                    <button className="bg-krutNeon bg-opacity-50 rounded-full w-[220px] px-8 h-[58px] text-xl ">
                      Choose Image
                    </button>
                    <button
                      className=" rounded-full px-8 text-xl mt-2 w-[220px] h-[58px]"
                      style={{ backgroundColor: "rgba(239, 0, 0, 0.35)" }}
                    >
                      Delete Image
                    </button>
                  </div>
                  <div className="mx-4 my-4">
                    <img className=" w-[308px] h-[128px]" src={AIIMg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            

            <div className=" min-h-28">
              <div className="py-4 flex flex-col">
                <label
                  htmlFor="contentone"
                  className="text-lg   2xl:text-sm font-medium"
                >
                  Content Below Img 2
                </label>
                <textarea
                  id="contenttwo"
                  className="focus:outline-none px-4 mt-4 lg:placeholder:text-lg lg:placeholder:font-normal border border-gray-400 rounded-xl h-16 2xl:h-16"
                  placeholder="Please type the content"
                ></textarea>
              </div>
            </div>

            
            <div className="min-h-36 mx-2 mt-2 py-4">
              <div className="min-h-36 ">
                <label
                  htmlFor="Profile Picture"
                  className="text-lg   2xl:text-sm font-medium"
                >
                 Inside Blog -&gt; Img 3
                </label>
                <div className="flex">
                  <div className="flex flex-col mx-4 my-4">
                    <button className="bg-krutNeon bg-opacity-50 rounded-full w-[220px] px-8 h-[58px] text-xl ">
                      Choose Image
                    </button>
                    <button
                      className=" rounded-full px-8 text-xl mt-2 w-[220px] h-[58px]"
                      style={{ backgroundColor: "rgba(239, 0, 0, 0.35)" }}
                    >
                      Delete Image
                    </button>
                  </div>
                  <div className="mx-4 my-4">
                    <img className=" w-[308px] h-[128px]" src={AIIMg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            

            <div className=" min-h-28">
              <div className="py-4 flex flex-col">
                <label
                  htmlFor="contentthree"
                  className="text-lg   2xl:text-sm font-medium"
                >
                  Content Below Img 3
                </label>
                <textarea
                  id="contentone"
                  className="focus:outline-none px-4 mt-4 lg:placeholder:text-lg lg:placeholder:font-normal border border-gray-400 rounded-xl h-16 2xl:h-16"
                  placeholder="Please type the content"
                ></textarea>
              </div>
            </div>

            <div className=" min-h-[20rem] flex flex-col justify-center items-center gap-10">
                  <button className="text-4xl font-bold text-white bg-black rounded-full px-12 py-4">Submit Details</button>

                  <button className="text-4xl font-bold text-white bg-black rounded-full px-12 py-4" onClick={togglePreviewModal}>Preview</button>
            </div>

          </div>
          
        </div>
       
      </div>
      {previewModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50"  onClick={handleOverlayClick}>
          <div className="blog-preview-modal bg-black   rounded-lg max-h-[30rem] overflow-y-scroll  w-full mx-2     2xl:mx-28  ">
            
          <BlogPreviewModal 
        genre={genre} 
        title={title} 
        authorName={authorName} 
        dateOfPublish={dateOfPublish} 
        contentOne={contentOne} 
        finalImage={finalImage}
      />
            <div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddBlog;
