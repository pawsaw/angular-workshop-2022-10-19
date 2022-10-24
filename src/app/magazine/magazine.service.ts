import { Injectable } from '@angular/core';
import { map, Observable, zip } from 'rxjs';
import { AuthorResource } from '../api/author.resource';
import { Magazine } from './magazine';
import { MagazineResource } from '../api/magazine.resource';
import { Author } from './author';

@Injectable({
  providedIn: 'root',
})
export class MagazineService {
  constructor(
    private readonly _magazineRes: MagazineResource,
    private readonly _authorRes: AuthorResource
  ) {}

  all(): Observable<Magazine[]> {
    return zip(this._magazineRes.all(), this._authorRes.all()).pipe(
      map(([resMagazines, resAuthors]) => {
        const authorById: Record<number, Author> = resAuthors.reduce(
          (acc, resAuthor) => {
            acc[resAuthor.id] = resAuthor as Author;
            return acc;
          },
          {} as Record<number, Author>
        );

        return resMagazines.map(
          (resMagazine) =>
            ({
              ...resMagazine,
              author: authorById[resMagazine.authorId],
            } as Magazine)
        );
      })
    );
  }
}
