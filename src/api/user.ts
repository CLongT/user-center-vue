import myAxios from "@/request";

/**
 * 用户注册
 * @param params
 */
export const userRegister = async (params: any) => {
    return await myAxios.request({
        url: "/api/user/register",
        method: "post",
        data: params,
    })
}
/**
 * 用户登录
 * @param params 登录参数，通常包含用户名和密码
 */
export const userLogin = async (params: any) => {
    return await myAxios.request({
        url: "/api/user/login",
        method: "post",
        data: params,
    });
};
/**
 * 用户注销
 */
export const userLogout = async (params: any) => {
    return await myAxios.request({
        url: "/api/user/logout",
        method: "post",
        data: params,
    });
};
/**
 * 获取当前用户信息
 */
export const getCurrentUser = async () => {
    return await myAxios.request({
        url: "/api/user/current",
        method: "get",
    });
};
/**
 * 获取用户列表
 * @param params 查询参数，如分页、筛选条件等
 */
export const searchUsers = async (username: any) => {
    return await myAxios.request({
        url: "/api/user/search",
        method: "get",
        params: {username,}
    });
};
/**
 * 删除用户
 * @param userId 用户ID
 */
export const deleteUser = async (id: string) => {
    return await myAxios.request({
        url: "/api/user/delete",
        method: "post",
        data: id,
        headers: {
            "Content-Type": "application/json",
        }
    });
};