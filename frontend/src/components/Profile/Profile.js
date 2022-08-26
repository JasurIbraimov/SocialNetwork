import React from 'react'
import UsersApiService from '../../api/UsersApiService'
import {Card, CardBody, CardImg, CardTitle, CardText, Container, CardLink } from 'reactstrap'
const usersApi = new UsersApiService()
class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }

    }
    render() {
        let card
        if (this.state.loaded) {
            const {profile: {birthday, about, user, avatar, github_url, joined_at, updated_at, website_url}} = this.state
            const displayInfo = {
                birthday,
                about: about.length ? about : null, 
                github_url,
                joined_at: new Date(joined_at).toLocaleString(),
                updated_at: new Date(updated_at).toLocaleString(),
                website_url
            }
            card = (
                <Card className="my-2">
                    <CardBody className='d-flex'>
                        <CardImg
                            className='profile-card-img rounded'
                            alt="Card image cap"
                            src={avatar}
                            style={{height: 200, width: 150, objectFit: "cover"}}
                            top
                        />
                        <div className='m-3'>
                            <CardTitle tag="h5">
                                {user.username}
                            </CardTitle>
                            {
                                Object.keys(displayInfo).map((key) => {
                                    if (displayInfo[key] != null) {
                                        return (<>
                                            <CardText>
                                                <span className='text-capitalize '>{key.replace('_', ' ')}</span>: {displayInfo[key]}
                                            </CardText>
                                        </>)
                                    } else {
                                        return ""
                                    }
                                })
                            }

                        </div>
                    </CardBody>
                </Card>
            )
        }
        return (
            <Container>
                {this.state.loaded && (card)}
            </Container>
        )
    }
    componentDidMount() {
        usersApi.getUserProfile(this.props.id).then(({data}) => {
            this.setState({profile: data, loaded: true})
        })
    }
}


export default Profile