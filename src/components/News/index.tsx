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
                <div className="row">
                    <div className="column-left">
                        {search.results.hits && (
                            current8.slice(0, 4).map(hit => (
                                <div key={`key-${hit.objectID}`}>
                                    <NewsComponent {...hit} />
                                </div>
                            ))
                        )}
                    </div>
                    <div className="column-right">
                        {search.results.hits && (
                            current8.slice(4, 8).map(hit => (
                                <div key={`key-${hit.objectID}`}>
                                    <NewsComponent {...hit} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div className="pagination">
                <PaginationComponent onChange={onChangePagination} itemsCount={!search.results.hits ? 0 : Math.ceil(search.results.hits.length / 8)} />
            </div>
        </div>
    )
}

export default React.memo(News);