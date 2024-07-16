import picture from './assets/images/palm.jpg'

export default function Image (){
    return(
        <div className='container-fluid' style={{width:'100%'}}>
            <div> 
                <img style={{width:'100%',display:'block',margin:'auto',borderRadius:'15px'}} className='image-fluid' src={picture} alt="image"></img>
            </div>
        </div>
    )
}
