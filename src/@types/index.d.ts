namespace rdb {

	type DispSet<T> = React.Dispatch<React.SetStateAction<T>>;

	type ReactInputEvent = React.MouseEvent<HTMLInputElement, MouseEvent>;

	type ClientState = "offline" | "signedin" | "signedout" | "presign";

	type UserRoles = "user" | "moderator" | "admin";

}
