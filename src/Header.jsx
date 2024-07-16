export default function Header () {
    const handlePopover = () =>{
        $('#mypopover').addClass('animate__animated animate__backInDown')
        $('#mypopover').css('display','block')
    }
    const closePopup = () =>{
        $('#mypopover').addClass('animate__animated animate__fadeInBottomLeft')
        $('#mypopover').css('display','none')
    }

    return(
        <div className="container-fluid">
            <h1 style={{color:'#E4F900',fontFamily:'cursive'}} className="text-center">Image Background Remover</h1>
             <a onClick={handlePopover} className="btn" role="button" popovertarget = "mypopover"><h3 style={{color:'black',textDecoration:'underline dotted yellow'}}>About__:</h3></a> 
             <div id="mypopover"  style={{display:'none'}}>
                <div style={{width:'70%',margin:'auto',padding:'10px'}} className="card ">
                    <div className="text-end">
                        
                        <button onClick={closePopup} className="btn "><i class="fa-regular fa-circle-xmark fa-fade fa-2xl" style={{color:'#ff0000'}}></i></button>
                    </div>
                    <h5>This is a background remover web application that lets you erase distracting and annoying backgrounds.</h5>
                    <h5>Upload images to this website to remove all background objects and download the new image at high resolution</h5>
                </div>

             </div>
            
        </div>
    )
}