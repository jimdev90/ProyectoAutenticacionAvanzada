
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Home.scss';
import loginImg from '../../assets/login.svg';

const Home = () => {
    return (
        <div>
            <section className='container hero'>
                <div className='hero-text'>
                    <h2>Ultimate MERN stack Authentication System</h2>
                    <p>Sit ullamco ad ipsum reprehenderit velit fugiat excepteur. Consectetur qui quis ad tempor pariatur duis dolore consequat Lorem mollit commodo.</p>
                    <p> Est excepteur nisi velit nulla sint labore sunt adipisicing. Sit dolor ullamco ipsum commodo ex excepteur do excepteur qui Lorem culpa. Et qui nisi quis minim sit id tempor ea nostrud. Lorem ut nostrud quis sint non laboris exercitation in tempor ut laboris tempor tempor.</p>

                    <div className='herp-buttons --flex-start'>
                        <button className='--btn --btn-danger'>Registrarse</button>
                        <button className='--btn --btn-secondary'>Iniciar sesión</button>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={loginImg} alt='AuthSystem' />
                </div>
            </section>
        </div>
    )
}

export default Home