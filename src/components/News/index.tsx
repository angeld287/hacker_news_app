import React from 'react';
import { INews } from '../../interfaces/components/INews';
import { TabType } from '../../interfaces/components/ITab';
import NewsComponent from '../NewsComponent';
import PaginationComponent from '../PaginationComponent';
import SelectComponent from '../SelectComponent';
import './styles.css';
import useNews from './useNews';

const News: React.FC<INews> = ({ type }) => {
    const { options, search, onChangePagination, current8 } = useNews();

    return (
        <div>
            <div>
                {type === TabType.ALL && <SelectComponent placeholder='Select your news' options={options} />}
            </div>
            <div>
                {
                    search.results.hits && current8.map(hit => (
                        <div key={hit.objectID}>
                            <NewsComponent {...hit} />
                        </div>
                    ))
                }
            </div>
            <div className="pagination">
                <PaginationComponent onChange={onChangePagination} itemsCount={!search.results.hits ? 0 : Math.ceil(search.results.hits.length / 8)} />
            </div>
        </div>
    )
}

export default React.memo(News);