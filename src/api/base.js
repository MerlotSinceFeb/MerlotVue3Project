import request from '../plugins/request';

export default function AccountLogin (data) {
    return request({
        url: '/api/login',
        method: 'post',
        data
    });
}