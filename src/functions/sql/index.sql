-- Get all users and related posts (one-to-many)
select * from users u join post p on u.user_id = p.post_id where u.user_id = 1;

-- No relacionamento 1-to-1 a chave primária é passada como chave estrangeira pra outra tabela
select 
    u.name as username
    a.cep
from users u 
    join addresss a 
on u.user_id = a.address_id;