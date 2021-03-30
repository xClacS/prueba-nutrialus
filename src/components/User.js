import "bootstrap/dist/css/bootstrap.min.css";

export const User = ({ name, email, phone, nutritionist, image }) => {
    // console.log(image)
    return (
        <>  
        <div class="card mb-3" style={{maxWidth: '540px'}}>
            <h3 class="" style={{textAlign: "center"}}>Paciente</h3>
        </div>
            <div class="card mb-3" style={{maxWidth: '540px'}}>
                <img src={image} class="card-img-top" alt={name}/>
                <div class="card-body">
                    <h5 class="card-title">Nombre</h5>
                    <p class="card-text">{name}</p>
                    <hr/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Email</h5>
                    <p class="card-text">{email}</p>
                    <hr/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Phone</h5>
                    <p class="card-text">{phone}</p>
                    <hr/>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Nutritionist</h5>
                    <p class="card-text">{nutritionist}</p>
                    <hr/>
                </div>
            </div>
        </>
    )
}