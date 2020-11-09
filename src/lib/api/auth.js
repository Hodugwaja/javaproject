import client from './client';

// 아이디 중복 체크
export const idcheck = ({ id }) => {
    return client.get(`/api/auth/idcheck/${id}`);
}

// 이메일 인증 보내기
export const sendemail = ({ id, email }) => {
    return client.post(`/api/auth/emailsend`, { id, email });
}

// 회원가입
export const register = ({ id, password, email}) => {
    return client.post(`/api/auth/signup`, { id, password, email});
}

// 로그인
export const login = ({ id, password }) => {
    return client.post(`/api/auth/login`, { id, password });
}

// 비밀번호 찾기
export const findpassword = ({ id, email }) => {
    return client.post(`/api/auth/findpassword`, { id, email });
}