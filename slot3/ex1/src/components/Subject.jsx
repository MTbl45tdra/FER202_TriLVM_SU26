function Subject(){
    //Khai báo mảng chuaws tên các môn học: React, ReactNative, NodeJS
    const subjectsArr = ['React', 'ReactNative', 'NodeJS'];
    return(
        <>
            <h1>Course name</h1>
            <ul>
                {subjectsArr.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
        </>
    )
}

export default Subject;