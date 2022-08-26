import React from 'react'
import UsersApiService from '../../api/UsersApiService'
const usersApi = new UsersApiService()
class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {
        return (
            <h1></h1>
        )
    }
    componentDidMount() {
        usersApi.getUserProfile(this.props.id).then(({data}) => {
            this.setState({profile: data})
        })
    }
}


export default Profile