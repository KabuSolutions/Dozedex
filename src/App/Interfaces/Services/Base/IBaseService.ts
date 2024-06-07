import { Observable } from "rxjs";
import { IBase } from "../../Components/Base/IBase";

export interface IBaseService <T extends IBase> {
    /**
	 * Get one item T by id.
	 * @param id the id of the item.
	 * @returns New item of T.
	 */
	GetOneById(id: number): Observable<T>;

    /**
	 * Get every active item T in a List of T.
	 * @returns New Array of T.
	 */
	GetAll(): Observable<T[]>;

    /**
	 * Add new item T into the database.
	 * @param item New item to add.
	 * @returns A Body and a Message with status
	 */
	AddOne(item: T): Observable<{ Body: string ,Message: string }>;

    /**
	 * Updates an item if exists in the database.
	 * @param item A updated item to save.
	 * @returns The Message with status.
	 */
	UpdateOne(item: T): Observable<{ Message: string }>;

    /**
	 * Inactivate an item T based on his ID.
	 * @param id Id from item T to inactivate.
	 * @returns The Message with status.
	 */
    DeleteOne(id: number): Observable<{ Message: string }>
}