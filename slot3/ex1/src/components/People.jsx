
function People() {
    //Tạo 1 list of object Person có 10 gồm 3 phần tử: id, name, age.
    //Hiển thị danh sách người dùng trong component People ra dạng danh sách
    //có đánh số thứ tự, tên và tuổi của người dùng.
    // Tìm người đàu tiên có tuổi là teenager, nếu có thì hiển thị tên của người đó, nếu không có thì hiển thị "No result".
    const peopleArr = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age:24 },
        { id: 4, name: "David", age: 16 },
        { id: 5, name: "Eve", age: 45 },
        { id: 6, name: "Frank", age: 50 },
        { id: 7, name: "Grace", age: 35 },
        { id: 8, name: "Henry", age: 60 },
        { id: 9, name: "Ivy", age: 41 },
        { id: 10, name: "Jack", age: 19 }
    ];

    return (
        <div>
            <h1>People List</h1>
            <ul>
                {peopleArr.map((person, index) => (
                    <li key={person.id}>
                        {index + 1}. {person.name} - {person.age} years old
                    </li>
                ))}
            </ul>
            <h2>First Teenager:</h2>
            <p>
                {peopleArr.find(person => person.age >= 10 && person.age <= 18)?.name || "No result"}
            </p>
        </div>
    );
}

export default People;
