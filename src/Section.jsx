import './Section.css'
import Image from './Image'
import { useState } from 'react'
import { error, ready } from 'jquery';

export default function Section () {

    const url = 'https://api.remove.bg/v1.0/removebg'
    const apiKey = 'tE6MPqm2bEeWzJntGJUfaSGr';

    const [imageURL,setImageURL] = useState(null)
    const [bgRemove,setBgRemove] = useState(null)

    const handleChange = (e) =>{
        setImageURL(imageURL=>e.target.value)
    }

    const  handleUpload = (e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('image_file', imageURL);
        formData.append('size', 'auto');


        fetch('https://api.remove.bg/v1.0/removebg',{
            method:'POST',
            headers: {
            'X-Api-Key': apiKey
         }, 
         body: formData
        })
        .then(function(reponse){
                return reponse.blob()
        })
        .then(function(blob){
                console.log(blob);
                
        })
        .catch();
    }
    


    return(
        <div className="container-fluid">
            <Image/>
            <br/>
            <form onSubmit={handleUpload}>
                <p>Select an Image / take a photo &nbsp;&nbsp;&nbsp;&nbsp;<i style={{color:'#E4F900'}} className="fa-solid fa-camera fa-2xl" ></i></p>
                <input value={imageURL} onChange={handleChange}  required style={{borderColor:'#E4F900',border:'2px solid #E4F900'}} type="file" accept="image/* , video/*"  className="form-control"/>
                <br/>
                <div className='row'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='col'>
                        <button class="animated-button" type='submit'>
                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span class="text">Upload</span>
                            <span class="circle"></span>
                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                            </svg>
                        </button>

                    </div>&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='col'>
                        <button class="animated-button" type='button'>
                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span class="text">Download</span>
                            <span class="circle"></span>
                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                            </svg>
                        </button>

                    </div>
                </div>
            </form>
            <div>
                {bgRemove &&(
                    <img src={bgRemove} alt='Removed background' ></img>
                )}
            </div>
        </div>
    )
}