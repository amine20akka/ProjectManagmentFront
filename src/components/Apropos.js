import { Component } from 'react'

class Apropos extends Component {
    state = {
        titre: "Qui sommes nous ?",
        contact: {
            nom: "Ma Société",
            email: "contact@masociete.com",
            logo: <img src="images/informatique.jpg" alt="PhotoSociete"></img>
        }
    }
    render() {
        return (
            <div>
            <h1>{this.state.titre}</h1>
                <table>
                    <tbody>

                        <tr>
                            <td>{this.state.contact.logo}</td>
                            <td>
                                <li>Société : {this.state.contact.nom}</li>
                                <li>Email : {this.state.contact.email}</li>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>);
    }
}

export default Apropos;