-- Get all users and related posts (1:N)
select 
  * 
from users u 
  join post p
  on u.user_id = p.post_id 
where u.user_id = 1;

-- No relacionamento 1-to-1 a chave primária é passada como chave estrangeira pra outra tabela
select 
    u.name as username
    a.cep
from users u 
    join addresss a 
on u.user_id = a.address_id;

-- Pedidos de produtos 
-- Buscar um usuário específico
select username from users where id = 1;

-- Buscar todos os pedidos de usuário específico (1:N)
select 
  u.username as cliente,
  o.descricao, 
  o.status, 
  o.total 
from users u 
  inner join orders o 
  on u.id = o.user_id -- chave estrangeira
where u.id = 1;

-- Buscar os detalhes do pedido do usuário 
-- e mostrar quais produtos foram incluídos nesse pedido 
select 
  u.userbame as cliente,
  o.descricao,
  
from orders o
 join users u
 on u.user_id = o.user_id
 join orders_products op
 on o.order_id = op.order_id
 join products p
 on op.product_id = p.id
 where o.order_id = 1; -- pedido específico

-- Anúncios de campanhas
select
  c.username as cliente,
  c.title as nome_campanha,
  c.platform as plataforma,
  c.objective as objetivo
  c.status
from clients c
  join ads_campaigns ac
  on u.client_id = ac.cliente_id; 
