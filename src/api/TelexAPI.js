import axios from 'axios';

class TelexAPI {
	static async getIndexBoxes() {
		let boxes, error;

		await axios
			.get('https://telex.hu/api/index/boxes')
			.then(response => boxes = response.data)
			.catch(err => error = err);

		return {
			boxes,
			error
		};
	}
}

export default TelexAPI;
