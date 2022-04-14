import useAxios from 'axios-hooks';
export function useCep(cep) {
	const [{ data: hero, loading: isLoadingCep }] = useAxios(`/${cep}`);
	return {
		cep,
		isLoadingCep,
	};
}