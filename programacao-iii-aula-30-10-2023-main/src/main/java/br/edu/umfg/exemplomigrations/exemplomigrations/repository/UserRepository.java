package br.edu.umfg.exemplomigrations.exemplomigrations.repository;

import br.edu.umfg.exemplomigrations.exemplomigrations.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
