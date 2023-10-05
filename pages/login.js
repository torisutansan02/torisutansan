import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function Socials() {
    return (
        <>
            <Navbar />
            <Sidebar></Sidebar>
            
            <h1 className = "heading"> Login </h1> 

            <a className = "pretty" href = "https://dev-v5gahnclpcbqgjet.us.auth0.com/login?state=hKFo2SBHcmxKcWpZMmdLelU5NFp1aE92Mm9Ea0RuOHZPWEp0S6FupWxvZ2luo3RpZNkgaUhwbzYtT1l0S1d0RDA0amFiZTJOYWVKSnpSYVFpRlmjY2lk2SBMY3lBSHkwWWQ5cmhsM0JNVFpzODg2bU1oUFhBUnVkUg&client=LcyAHy0Yd9rhl3BMTZs886mMhPXARudR&protocol=oauth2&scope=openid%20profile%20email&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback&nonce=rbtq1QAFiNJaTnJNAjLeFHy-FSp8puXWk-lpwqa_EZc&code_challenge=v1gaVD8St6DDHH-3UlvUI2YnQ4F9TfQc5APyPJzxdl4&code_challenge_method=S256">
                Login
            </a>  

            <Footer />
        </>
    );
}

export default Socials