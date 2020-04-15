import React, { Component } from 'react'
import axios from 'axios'

export default class api extends Component {
    state = {
        // Users: []
    };
    getUsersData() {
        axios
            .get(`https://api.covid19india.org/data.json`, {})
            .then(res => {
                const data = res.data.statewise
                console.log(data)
                const users = data.map(u =>
                    <div>
                    <p>Active:{u.active}</p>
                    <p>Confirmed:{u.confirmed}</p>
                    <p>Recovered:{u.recovered}</p>
                    <p>Deaths:{u.deaths}</p>
                    </div>
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    // render() {
    //     return (
    //         <div>
                
    //         </div>
    //     )
    // }
}
