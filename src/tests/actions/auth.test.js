import {login, logout} from '../../actions/auth';

test('Should generate login object', () => {
    const uid = '231'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    }); 
}); 

test('Should generate logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});