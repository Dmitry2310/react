import { GetItemsType, instance, ResponseTypes } from './api';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '') {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`).then(response => {
            return response.data;
        });
    },
    followAPI(id: number) {
        return instance.post<ResponseTypes>(`follow/${id}`).then(response =>  response.data);
    },
    unFollowAPI(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data) as Promise<ResponseTypes>
    }
}


export default usersAPI;

