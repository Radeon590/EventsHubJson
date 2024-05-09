import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.account === null){
            navigate('signin');
        }
        else{
            navigate("profile");
        }
    });

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);