import { useNavigate } from "react-router-dom"

const UnauthorizedModal = () => {
    const navigate = useNavigate();

    const goSignin = () => navigate('/signin');

    return (
        <section>
            <p>Бүртгүүлэх</p>
            <div className="flexGrow">
                <button onClick={goSignin} className="btn-primary">Бүртгүүлэх</button>
                <button className="btn1">Буцах</button>
            </div>
        </section>
    )
}

export default UnauthorizedModal;