package com.rahul.employee_manage_api.repository;

import com.rahul.employee_manage_api.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
