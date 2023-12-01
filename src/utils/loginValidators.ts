import {reactive} from "vue";

interface User {
    email: string
    password: string
}

export const loginUser = reactive<User>({
    email: "",
    password: "",
})

interface Rules {
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        message: string;
        required: boolean;
        trigger: string;
        min?: undefined;
        max?: undefined;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
    })[];
}


export const rules = reactive<Rules>({
    email: [
        {
            // ? 与表单组件中的 prop 保持一致
            type: 'email',
            message: '邮箱的格式有误',
            required: true,
            trigger: 'blur'  // 元素失去焦点的时候触发
        }
    ],
    password: [
        {
            message: '密码不能为空',
            required: true,
            trigger: 'blur'
        },
        {
            min: 6,
            max: 30,
            message: '密码长度范围必须在 6~30 字符内',
            trigger: 'blur'
        }
    ],
})


interface ForgotUser {
    email: string
}

export const forgotUser = reactive<ForgotUser>({
    email: "",
})

interface ForgotRules {
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
}

export const forgotRules = reactive<ForgotRules>({
    email: [
        {
            // ? 与表单组件中的 prop 保持一致
            type: 'email',
            message: '邮箱的格式有误',
            required: true,
            trigger: 'blur'  // 元素失去焦点的时候触发
        }
    ]
})