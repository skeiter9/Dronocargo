const create = (modelName: string, data: string) => {
	localStorage.setItem(modelName, data);
};
const read = (modelName: string) => {
	return localStorage.getItem(modelName);
};
const remove = (modelName: string, data: string) => {
	localStorage.removeItem(modelName);
};
const update = (modelName: string, data: string) => {
	return create(modelName, data);
};

const clear = () => {
	return localStorage.clear();
};

const api = { create, read, remove, update, clear };

export default api;
