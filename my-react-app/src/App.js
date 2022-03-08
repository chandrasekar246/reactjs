//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { Component } from 'react';
//import Loading from './Loading'
import { LoadingH3 } from './LoadingMulti'

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			users: [],
			loading: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getUsers() {
		this.setState({
			loading: true
		});

		axios('https://reqres.in/api/users?per_page=10').then(
			response => {
				console.log(response);

				this.setState({
					users: [...this.state.users, ...response.data.data],
					loading: false
				})
			}
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.getUsers();
		console.log('More users appended!');
	}

	componentDidMount() {
		this.getUsers()
	}

	render() {
		const { loading, users } = this.state;
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<input type="submit" value="Append Users" />
				</form>
				<hr />
				{!loading ?
					<div>
						{users.map((user, index) =>
							<li key={index}>
								{user.first_name} {user.last_name}
							</li>
						)}
						<h3 style={{ color: 'red' }}>Count: {users.length}</h3>
					</div>
					: <LoadingH3 message="Loading H3 from props..." />
				}
			</div>
		);
	}
}

export default App;
