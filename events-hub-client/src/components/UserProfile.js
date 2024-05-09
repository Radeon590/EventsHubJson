export default function UserProfile({ data }){
    return (
        <div>
            <h1>{data.username}</h1>
            <p>{data.userEmail}</p>
            <p>{data.secondName} {data.firstName} {data.patronymic != null && data.patronymic}</p>
            <p>{data.age}</p>
        </div>
    );
}