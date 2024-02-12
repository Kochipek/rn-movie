import { createSlice, createAsyncThunk,} from '@reduxjs/toolkit'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'


export const register = createAsyncThunk(
    'user/register',
    async({email, password}) => {
        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            const userData = {
                user: user,
            }
            return userData
        } catch (error) {
            console.error('Registration failed:', error);
            throw error; // Rethrow the original error
        }
    })

export const login = createAsyncThunk(
'user/login',
async({email, password}) => {
    try {
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        const token = user.stsTokenManager.accessToken

        const userData = {
            token,
            user: user,
        }
        return userData
    } catch {
        console.log('Error');
        throw new Error('Login failed')
    }
}
)

const initialState = {
    email : '',
    username: '',
    password: null,
    isAuth: false,
    user : null,
    token : null,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setEmail: (state, action) => {
            const lowerCaseEmail = action.payload.toLowerCase()
            state.email = lowerCaseEmail
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            console.log('Pending');
            state.isAuth = false;
        }) .addCase(login.fulfilled, (state, action) => {
            console.log('Fulfilled');
            state.isAuth = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        }) .addCase(login.rejected, (state, action) => {
            console.log('Rejected');
            state.isAuth = false;
            state.error = action.error.message;


        }) .addCase(register.pending, (state) => {
            console.log('Pending');
            state.isAuth = false;
        }) .addCase(register.fulfilled, (state, action) => {
            console.log('Fulfilled');
            state.isAuth = true;
            state.user = action.payload.user;
            state.username = action.payload.username;

        }) .addCase(register.rejected, (state, action) => {
            console.log('Rejected');
            state.isAuth = false;
            state.error = action.error.message;
        })
    }
})

// userSlice.actions used for dispatching actions to the store
export const { setUsername, setEmail, setPassword, } = userSlice.actions
export default userSlice.reducer