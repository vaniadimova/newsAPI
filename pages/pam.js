import Head from 'next/head';
import { Toolbar } from '../components/toolbar';

export const PAM = ( { profile }) => {
    console.log(profile); 
    return (
        <div className='page-container'>
            <div>
                <h1>Page About Me</h1>
                <div>
                    <h3>{profile.name}</h3>
                    <h6>{profile.position}</h6>
                    <img src={profile.image} alt={profile.name} />
                    <p>{profile.description}</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async  pageContext => {
const apiResponse = await fetch(`https://my-json-server.typicode.com/vaniadimova/newsAPI/PageAboutMe`
);
const profile = await apiResponse.json();

return {
    props: {
        profile
}

}
};

export default PAM;