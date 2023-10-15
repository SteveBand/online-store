import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: {
    _id?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    username?: string;
  };
}

interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  username?: string;
}

const initialState: UserState = {
  user: {},
};

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async ({ e, params }: { e: React.FormEvent; params: {} }, thunkAPI) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    if (data.email) {
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    return data;
  }
);

export const keepUser = createAsyncThunk(
  "user/keepLogin",
  async (token: string, thunkApi) => {
    const res = await fetch("http://localhost:4000/login", {
      credentials: "include",
      headers: {
        authorization: JSON.parse(token),
      },
    });
    if (res.ok) {
      const data = res.json();
      return data;
    } else {
      localStorage.removeItem("token");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.log("Failed");
        console.log(action.error.message);
      })
      .addCase(keepUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(keepUser.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;
