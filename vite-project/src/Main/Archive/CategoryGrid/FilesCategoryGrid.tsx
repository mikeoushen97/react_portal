import { useState, useEffect } from "react";
import FilesCategoryStyles from "../CategoryGrid/FilesCategoryStyles.module.css"

function FilesCategoryGrid() {

    interface GroupWithImage {
        groupName: string;
        groupImage: string;
    }

    const [categoriesData, setCategoriesData] = useState<GroupWithImage[]>([]);

    useEffect(() => {
        fetch('/json_files/file_groups.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка загрузки файла');
                }
                return response.json();
            })
            .then((data) => {
                const combinedData = data.base.files_groups.map((group: string, index: number) => ({
                    groupName: group,
                    groupImage: data.base.files_groups_images[index]
                }));
                setCategoriesData(combinedData);
            })
    }, []);

    return (
        <div className={FilesCategoryStyles["filesCategoryGrid"]}>
            {categoriesData.map((item, index) => (
                <div key={index} className={FilesCategoryStyles["categoryItem"]}>
                    <div className={FilesCategoryStyles["categoryItemImage"]}>
                        <img src={item.groupImage} alt="" />
                    </div>
                    <h3 className={FilesCategoryStyles["categoryItemTitle"]}>{item.groupName}</h3>
                </div>
            ))}
            <div className={FilesCategoryStyles["buttonContainer"]}>
                <button className={FilesCategoryStyles["filesCategoryButton"]}>Добавить</button>
            </div>
        </div>

    )
}

export default FilesCategoryGrid